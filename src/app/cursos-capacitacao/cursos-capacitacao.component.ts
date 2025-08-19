import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';

interface Curso {
  nome: string;
  plataforma: string;
  url: string;
  descricao?: string;
  gratuito: boolean;
  observacao?: string;
}

interface Plataforma {
  nome: string;
  url: string;
  descricao: string;
  gratuito: boolean;
  observacao?: string;
}

interface CategoriaRecurso {
  titulo: string;
  icone: string;
  recursos: {
    nome: string;
    url: string;
    descricao?: string;
  }[];
}

@Component({
  selector: 'app-cursos-capacitacao',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './cursos-capacitacao.component.html',
})
export class CursosCapacitacaoComponent {

  // Plataformas Gratuitas
  plataformasGratuitas: Plataforma[] = [
    {
      nome: 'GitHub Student Developer Pack',
      url: 'https://education.github.com/pack',
      descricao: 'Pacote completo de ferramentas e recursos para estudantes desenvolvedores',
      gratuito: true
    },
    {
      nome: 'Instituto Federal do Rio Grande do Sul',
      url: 'https://moodle.ifrs.edu.br/login/index.php',
      descricao: 'Diversos cursos em tecnologia e outras áreas',
      gratuito: true,
      observacao: 'Manutenção até dia 31 de maio'
    },
    {
      nome: 'Fundação Bradesco Escola Virtual',
      url: 'https://www.ev.org.br/cursos',
      descricao: 'Cursos em tecnologia e outras áreas',
      gratuito: true
    },
    {
      nome: 'FGV - Educação Executiva',
      url: 'https://educacao-executiva.fgv.br/cursos/gratuitos',
      descricao: 'Cursos executivos gratuitos',
      gratuito: true
    },
    {
      nome: 'Santander Open Academy',
      url: 'https://www.santanderopenacademy.com/pt_br/index.html',
      descricao: 'Plataforma de educação do Santander',
      gratuito: true
    },
    {
      nome: 'Sebrae',
      url: 'https://sebrae.com.br/sites/PortalSebrae/cursosonline',
      descricao: 'Cursos para empreendedores e gestores',
      gratuito: true
    },
    {
      nome: 'Plataforma Alison Google',
      url: 'https://alison.com/pt-BR/cursos/ele#google_vignette',
      descricao: 'Cursos online gratuitos',
      gratuito: true
    },
    {
      nome: 'Instituto Federal de Minas Gerais',
      url: 'https://mais.ifmg.edu.br/maisifmg/course/index.php?categoryid=10',
      descricao: 'Cursos técnicos e superiores',
      gratuito: true
    },
    {
      nome: 'Cursos Dev Samurai',
      url: 'https://class.devsamurai.com.br/',
      descricao: 'Cursos de desenvolvimento web e mobile',
      gratuito: true,
      observacao: 'Disponível apenas até o fim do ano'
    }
  ];

  // Cursos Dev Samurai Específicos
  cursosDevSamurai: Curso[] = [
    { nome: 'Lógica de Programação Avançada', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Lógica de Programação Básica', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Frontend - Flexbox', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Frontend - Formulário de Cadastro', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Frontend - HTML Básico', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Frontend - Bootstrap', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Frontend - Entendendo o HTML com o CSS', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'TypeScript - TODO List', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'TypeScript Básico', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Minicurso Programar do Zero', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Programar do Zero - HTML', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Backend - Dominando o NodeJS', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true },
    { nome: 'Backend - Dominando o Postgres', plataforma: 'Dev Samurai', url: 'https://class.devsamurai.com.br/', gratuito: true }
  ];

  // Cursos de Banco de Dados
  cursosBancoDados: Curso[] = [
    {
      nome: 'Curso Completo Otávio Miranda',
      plataforma: 'YouTube',
      url: 'https://www.youtube.com/watch?v=lHYV_H1526Q&list=PLbIBj8vQhvm2WT-pjGS5x7zUzmh4VgvRk',
      descricao: 'Curso completo de banco de dados',
      gratuito: true
    },
    {
      nome: 'Curso Completo de SQL com SQL Server para Iniciantes',
      plataforma: 'YouTube',
      url: 'https://www.youtube.com/watch?v=KOhd3R5kLks',
      descricao: 'SQL Server do básico ao avançado',
      gratuito: true
    }
  ];

  // Recursos sobre APIs
  recursosAPI: CategoriaRecurso[] = [
    {
      titulo: 'Vídeos Educativos sobre APIs',
      icone: 'play_circle_filled',
      recursos: [
        {
          nome: 'O que é uma API?',
          url: 'https://www.youtube.com/watch?v=1QZR5De4f9E',
          descricao: 'Conceitos básicos sobre APIs'
        },
        {
          nome: 'O que é API? O que é REST? O que é RESTful?',
          url: 'https://www.youtube.com/watch?v=umaXYEbd5vA&t=50s',
          descricao: 'Diferenças entre REST e RESTful'
        },
        {
          nome: 'Diferença entre API e WebService (SOAP)',
          url: 'https://www.youtube.com/watch?v=YWPT2UOxbUg',
          descricao: 'Comparação entre diferentes tipos de serviços web'
        },
        {
          nome: 'O que é REST?',
          url: 'https://www.youtube.com/watch?v=HsDUsdYlup0&pp=ygUSYXVndXN0byBnYWxlZ28gYXBp',
          descricao: 'Conceitos fundamentais de REST'
        },
        {
          nome: 'REST vs GraphQL | Quando usar qual?',
          url: 'https://www.youtube.com/watch?v=dsarexwqcjc&pp=ygUSYXVndXN0byBnYWxlZ28gYXBp0gcJCY0JAYcqIYzv',
          descricao: 'Comparação entre REST e GraphQL'
        }
      ]
    },
    {
      titulo: 'Artigos Técnicos sobre APIs',
      icone: 'article',
      recursos: [
        {
          nome: 'REST e SOAP: entenda as diferenças',
          url: 'https://www.redhat.com/pt-br/topics/integration/whats-the-difference-between-soap-rest',
          descricao: 'Comparação detalhada entre REST e SOAP'
        },
        {
          nome: 'Qual é a diferença entre o SOAP e o REST?',
          url: 'https://aws.amazon.com/pt/compare/the-difference-between-soap-rest',
          descricao: 'Guia da AWS sobre diferenças entre SOAP e REST'
        }
      ]
    }
  ];

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  abrirLink(url: string): void {
    window.open(url, '_blank');
  }

  getBackendCursos(): Curso[] {
    if (!this.cursosDevSamurai || this.cursosDevSamurai.length < 8) {
      return [];
    }
    return [
      this.cursosDevSamurai[0], // Lógica de Programação Avançada
      this.cursosDevSamurai[1], // Lógica de Programação Básica
      ...this.cursosDevSamurai.slice(7) // TypeScript em diante
    ];
  }
}