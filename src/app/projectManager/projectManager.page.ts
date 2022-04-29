import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectManager',
  templateUrl: './projectManager.page.html',
  styleUrls: ['./projectManager.page.scss'],
})
export class ProjectManagerPage implements OnInit {
  public tab: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tab = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
