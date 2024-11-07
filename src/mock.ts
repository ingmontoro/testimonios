export type Testimonio = {
    name: string
    position: string
    country: string
    company: string
    description: string
    image: string
}

export const testimonios: Testimonio[] = [
    {
        name: 'Andrea Gutiérrez',
        position: 'Directora de Marketing',
        description: 'Colaborar con la empresa ha sido una experiencia transformadora. La dedicación al detalle y el compromiso con la excelencia han impulsado significativamente nuestros resultados.',
        image: 'andrea',
        country: 'México',
        company: 'TechCorp',
    },
    {
        name: 'Mario',
        position: 'Plomero y Héroe',
        description: 'Colaborar con esta empresa <strong>ha sido una experiencia increíble</strong>. La dedicación y profesionalismo del equipo han sido fundamentales para nuestras aventuras y desafíos.',
        image: 'mario',
        country: 'Reino Champiñón',
        company: 'Nintendo'
    },
    {
        name: 'Eve',
        position: 'Guerrera',
        description: 'Trabajar con el equipo ha sido una experiencia trascendental. <strong>La excelencia y la innovación</strong> del equipo han elevado mis habilidades a un nivel que nunca pensé alcanzar.',
        image: 'eve',
        country: 'Japón',
        company: 'Stellar Blade'
    },
    {
        name: 'Bojji',
        position: 'Príncipe',
        description: 'Gracias al trabajo codo a codo con ellos he podido superar obstáculos imposibles y demostrar mi verdadera fuerza. Su apoyo constante ha sido clave en mi viaje hacia convertirme en un gran rey.',
        image: 'bojji',
        country: 'Bosse',
        company: 'Ranking of Kings'
    }
]