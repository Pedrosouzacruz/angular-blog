import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {data} from '../../data/data'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  contentTitle:string = ""
  @Input()
  contentDescription:string = ""
  private name:string | null = ""


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.name = value.get("name")
    )
    this.setValuesToComponent(this.name)
  }
  setValuesToComponent(name:string |null){
    const result = data.filter(article =>
      article.name == name)[0]
      this.contentTitle = result.title
      this.photoCover = result.photoCover
      this.contentDescription = result.description
  }
}
