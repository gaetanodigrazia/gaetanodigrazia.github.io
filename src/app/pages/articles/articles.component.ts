import { Component } from '@angular/core';

interface Article {
  title: string;
  description: string;
  pdfUrl: string;
  date: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles: Article[] = [
    {
      title: 'Predictive Modeling for Real Estate Prices',
      description: 'Master thesis on machine learning for real estate price estimation.',
      pdfUrl: 'assets/articles/msc_thesis.pdf',
      date: 'June 2025'
    },
  {
    title: 'Algorithmic Trading: Methods and Tools',
    description: 'An early research paper covering essential tools and quantitative strategies for algorithmic trading.',
    pdfUrl: 'assets/articles/Strumenti_e_metodi_per_il_trading_algoritmico.pdf',
    date: 'March 2021'
  },
  {
    title: 'Image-to-Image Translation: An Overview',
    description: 'A summary of methods for generative image translation using deep learning, including GAN architectures and practical applications.',
    pdfUrl: 'assets/articles/Image_To_Image_Translation_Overview.pdf',
    date: 'April 2022'
  }

  ];
}
