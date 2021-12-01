import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppReducer } from './components/app.state';

// components
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './components/counter/counter-button/counter-button.component';
import { CounterCustomInputComponent } from './components/counter/counter-custom-input/counter-custom-input.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CounterCustomInputComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    PostListComponent,
    CreatePostComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(AppReducer),
    AppRoutingModule,
    FormsModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
