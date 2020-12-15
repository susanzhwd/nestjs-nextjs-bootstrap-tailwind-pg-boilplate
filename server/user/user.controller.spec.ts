import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
    let userController: UserController;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        userController = moduleRef.get<UserController>(UserController);
    });

    it('should be defined', () => {
        expect(userController).toBeDefined();
    });
});
