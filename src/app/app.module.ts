import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MaiorIdadeDirective } from './directives/MaiorIdadeDirective';
import { MudarCorDirective } from './directives/mudarCorDirective';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent, MensagemComponent, MaiorIdadeDirective, MudarCorDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
