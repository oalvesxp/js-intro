export default function errors(err) {
    if (err.code === 'ENOENT') {
        throw new Error('Arquivo não encontrado');
    } else {
        return 'Erro de execução';
    }
}
