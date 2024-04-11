export function generateSlug(text: string): string {
    return text
        .normalize('NFD') // Normaliza os caracteres Unicode para decompor em combinação de caracteres simples
        .replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, '') // Remove acentos e caracteres especiais
        .toLowerCase() // Converte para minúsculas
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/[^\w\-]+/g, '') // Remove caracteres não alfanuméricos exceto hífens
        .replace(/\-\-+/g, '-') // Remove múltiplos hífens por um único hífen
        .replace(/^-+/, '') // Remove hífens do início
        .replace(/-+$/, ''); // Remove hífens do final
}