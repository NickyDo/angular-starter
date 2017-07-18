/**
 * Created by dotron on 7/19/2017.
 */
import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'login'.
   */
  selector: 'login',  // <login></login>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: ['./login.component.css'],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public count: number;
  public isDebugMode: boolean;

  constructor (public router: Router) {
    console.log('hello `Login` component');
    this.username = '';
    this.password = '';
    this.count = 0;
    this.isDebugMode = false;
  }

  public ngOnInit () {
    console.log('hello Login` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public displayDebug () {
    this.count++;
    if (this.count === 10) {
      this.isDebugMode = true;
    }
  }

  // public changeServer() {
  //   console.log('server',this.serverId);
  //   this.sds.setServer(this.serverId);
  //   this.reloadPage();
  // }

  public login () {
    let self = this;
  }

  public onKeyPress (event: any) {
    if (event.keyCode === 13) {
      this.login();
    }
  }

  public register () {
    this.router.navigate(['/register']);
  }

  public reloadPage () {
    location.reload();
  }
}
