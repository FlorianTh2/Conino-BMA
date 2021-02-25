import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromHome from "./store/reducers";
import { Counter } from "./shared/models/counter";
import { map } from "rxjs/operators";
import {
  MaturityModel,
  MaturityModelGQL,
  PartialModel,
  PartialModelsGQL
} from "../graphql/generated/graphql";
import { ID_OF_MATURITYMODEL } from "../shared/constants/constants";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  maturityModel$: Observable<MaturityModel>;

  constructor(private maturityModelGQL: MaturityModelGQL) {
    this.maturityModel$ = this.maturityModelGQL
      .watch({ maturityModelId: ID_OF_MATURITYMODEL })
      .valueChanges.pipe(
        map((result) => result.data.maturityModel as MaturityModel)
      );
  }

  ngOnInit(): void {}
}
