import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  
  imgs = ['win1.jpg', 'win2.jpg'];

  description = [
    'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'Play a little jump and run by helping Pepe named Ell pollo loco on his adventure',
  ];
  title = ['Join','El pollo locco'];
  usedTech = ['JavaScript | Html | CSS','JavaScript | Html | CSS'];
  
}