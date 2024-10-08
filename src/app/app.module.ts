import { NgModule } from '@angular/core'; // Importar NgModule
import { BrowserModule } from '@angular/platform-browser'; // Importar BrowserModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppComponent } from './app.component'; // Importar o componente principal
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; // Importar o componente da lista de compras

@NgModule({
  declarations: [
    AppComponent, // Declarar o componente principal
    ShoppingListComponent // Declarar o componente da lista de compras
  ],
  imports: [
    BrowserModule, // Importar BrowserModule
    FormsModule // Importar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Definir o componente inicial
})
export class AppModule { }
