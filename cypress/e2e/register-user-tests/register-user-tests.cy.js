import { faker } from '@faker-js/faker';
import '../../pages/register-user-page/register-user-page'

describe('Validar Registro de Usuário', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    })

    it('Validar Mensagem de Boas Vindas ao Registrar Usuário com Sucesso', () => {

        cy.typeFirstName('Dawid');
        cy.typeLastName('Carneiro');
        cy.typeStreet('Rua Um');
        cy.typeCity('Samambaia-DF');
        cy.typeState('Distrito Federal');
        cy.typeZipCode('465789521');
        cy.typePhoneNumber('61988954889');
        cy.typeSSN('23352656484889');
        cy.typeUserName(faker.internet.username());
        cy.typePassword('teste123');
        cy.typeRepeatedPassword('teste123');
        cy.clickRegister();

        cy.contains('p', 'our account was created successfully. You are now logged in.')
            .should('be.visible')




    })


    it('Validar Mensagem de Senha Incorreta ao Tentar Cadastrar com Senhas Diferentes', () => {

        cy.typeFirstName('Dawid');
        cy.typeLastName('Carneiro');
        cy.typeStreet('Rua Um');
        cy.typeCity('Samambaia-DF');
        cy.typeState('Distrito Federal');
        cy.typeZipCode('465789521');
        cy.typePhoneNumber('61988954889');
        cy.typeSSN('2335265648488');
        cy.typeUserName(faker.internet.username());
        cy.typePassword('teste123');
        cy.typeRepeatedPassword('teste1234');
        cy.clickRegister();

        cy.contains('Passwords did not match.')
            .should('be.visible')


    })
})
