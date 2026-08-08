import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { AboutPreview } from '../../components/about-preview/about-preview';
import { SermonsPreview } from '../../components/sermons-preview/sermons-preview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    AboutPreview,
    SermonsPreview
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
