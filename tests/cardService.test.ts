import * as cardService from '../src/services/cardService';
import * as companyRepository from '../src/repositories/companyRepository';
import * as employeeRepository from '../src/repositories/employeeRepository';
import * as cardRepository from '../src/repositories/cardRepository';

describe('CardService unit tests:', () => {
  describe('create function', () => {
    it('should create a card given valid inputs', async () => {
      jest.spyOn(companyRepository, 'findByApiKey').mockResolvedValueOnce({
        id: 1,
        name: 'company',
        apiKey: 'apiKey',
      });

      jest.spyOn(employeeRepository, 'findById').mockResolvedValueOnce({
        id: 1,
        fullName: 'Fulano Ciclano da Silva',
        cpf: '12345678910',
        email: 'fulanoSilva@gmail.com',
        companyId: 1,
      });

      jest
        .spyOn(cardRepository, 'findByTypeAndEmployeeId')
        .mockResolvedValueOnce({
          id: 1,
          employeeId: 1,
          number: '',
          cardholderName: '',
          securityCode: '',
          expirationDate: '',
          isVirtual: false,
          originalCardId: 1,
          isBlocked: false,
          type: 'education',
        });

      await cardService.create('apiKey', 1, 'education');
    });
  });
});
