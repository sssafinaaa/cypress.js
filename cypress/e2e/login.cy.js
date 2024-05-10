describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажали кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка наличия текста
         cy.get('#messageHeader').should('be.visible'); // видно ли текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка наличия крестика и видно ли его
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт

        cy.get('#forgotEmailButton').should('be.visible'); // видна ли кнопка
        cy.get('#forgotEmailButton').contains('Забыли пароль?'); // верный ли текст
        cy.get('#forgotEmailButton').click(); // нажали на кнопку

        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // проверка наличия текста
        cy.get('#forgotForm > .header').should('be.visible'); // видно ли текст
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // видно ли крестик
        cy.get('#mailForgot').type('nail.safina2016@yandex.ru') // ввели другую почту
        cy.get('#restoreEmailButton').click(); // нажали кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка наличия текста
        cy.get('#messageHeader').should('be.visible'); // видно ли текст
        cy.get('#exitMessageButton').should('be.visible'); // видно ли крестик
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажали кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка наличия текста
        cy.get('#messageHeader').should('be.visible'); // видно ли текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно ли крестик
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт

        cy.get('#mail').type('german2@dolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка наличия текста
        cy.get('#messageHeader').should('be.visible'); // видно ли текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно ли крестик
    })

    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт

        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без собаки
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка наличия текста
        cy.get('#messageHeader').should('be.visible'); // видно ли текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видно ли крестик
    })

    it('Логин со строчными буквами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин без собаки
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажали кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка наличия текста
        cy.get('#messageHeader').should('be.visible'); // видно ли текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка наличия крестика и видно ли его
     })
    })


