import { Component } from '@angular/core';
import gsap from 'gsap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'gsap-demo';
  tl = gsap.timeline()

  animate() {
    this.tl
    .to('.phone-screen', {duration: 0.5, ease: 'power2', background: 'conic-gradient(from 270deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'})
    .set('.app-icon', {scale: 0})
    .to('.app-drawer', {duration: 0.5, opacity: '1'})
    .to(".app-icon", {
      duration: 0.25,
      scale: 1,
      y: 10,  
      ease: "back",
      stagger: {
          amount: 1, 
        }
      },
      '<'
    )
  .to('.phone-screen', {duration: 1, ease:'bounce', background: 'conic-gradient(from 90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}, '<')
  .to('.home-dock', {duration: 0.75, bottom: 10, ease: 'circ.inOut'}, '<')
  .to('.dock-icon',{
    duration: 0.25,
    x: 0,  
    ease: "circ.out",
    stagger: {
        amount: 0.5, 
      }
    }, '<0.5')
}
// it turns off only once should fix
turnOff() {

  this.tl.reverse()
}
}