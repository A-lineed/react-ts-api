import gitApi from "./github";
import axios from "axios";

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('github', () => {
    it('Deve retornar login e id do usuário', async () => {
        axiosMock.get = jest.fn().mockReturnValue({
            data: {
                login: 'aline',
                id: '12345'
            }
        })
        const response = await gitApi.getUser('aline')
        expect(response).toMatchObject({
            login: 'aline',
            id: '12345'
        })

        it('Deve retornar a mensagem de usuário não encontrado', async () => {
            axiosMock.get = jest.fn().mockReturnValue({
                data: {
                    message: 'Not found'
                }
            })

            const response = await gitApi.getUser('usuario-invalido')
            expect(response).toMatchObject({ message: 'Not found' })
        })

    })
})