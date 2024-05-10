describe('Путь в покемонах', function () {

    it('Покемоны', function () {
         cy.visit('https://pokemonbattle.me/login'); //зашли на сайт

         cy.get('.auth__title').contains('Битва покемонов'); // проверка наличия текста
         cy.get('.auth__title').should('be.visible'); // видно ли текст
         cy.get(':nth-child(1) > .auth__input').type('LOGIN'); // ввели верный логин
         cy.get('#password').type('PASSWORD'); // ввели верный пароль
         cy.get('.auth__button').click(); // нажали на кнопку войти

         cy.get('.header__btns > [href="/shop"]').should('be.visible'); // видно ли кнопку
         cy.get('.header__btns > [href="/shop"]').click(); // нажали на кнопку

         cy.get('.available > button').first().click(); // выбираем первый аватар

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // водим срок действия
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим cvv
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('german dolnikov'); // вводим имя пользователя
         cy.get('.pay-btn').click(); // нажимаем оплатить

         cy.get('#cardnumber').type('56456'); // вводим код из смс
         cy.get('.payment__submit-button').click(); // нажимаем отправить

         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверка наличия текста
         cy.get('.payment__font-for-success').should('be.visible'); // видно ли текст
    })
})