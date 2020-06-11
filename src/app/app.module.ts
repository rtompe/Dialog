import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { DishComponent } from "./dishdetail/dishdetail.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { MenuComponent } from "./menu/menu.component";
import { LoginComponent } from "./login/login.component";
import "hammerjs";
import { DishService } from "./services/dish.service";
import { PromotionService } from "./services/promotion.service";
import { LeaderService } from "./services/leader.service";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [DishService, PromotionService,LeaderService],
  entryComponents: [
    LoginComponent
],
  bootstrap: [AppComponent]
})
export class AppModule {}
