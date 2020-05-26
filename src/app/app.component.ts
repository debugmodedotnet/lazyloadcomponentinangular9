import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Lazy Load Component Demo';
  @ViewChild('greettemp', { read: ViewContainerRef })
  private greetViewContainerRef: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

  }

   async loadGreetComponent(){

       this.greetViewContainerRef.clear();
       const {GreetComponent} = await import('./greet.component');
       let greetcomp = this.greetViewContainerRef.createComponent(
                     this.cfr.resolveComponentFactory(GreetComponent)
                     );
      greetcomp.instance.greetMessage = "I am passed from Parent ";
      greetcomp.instance.sendMessageEvent.subscribe(data=>{
        console.log(data);
      }) 
    }
    
  laoadGreetComponent() {

    this.greetViewContainerRef.clear();
    import('./greet.component').then(
      ({ GreetComponent }) => {

        let greetcomp = this.greetViewContainerRef.createComponent(
          this.cfr.resolveComponentFactory(GreetComponent)
        );
        greetcomp.instance.greetMessage = "I am passed from Parent abc ";
        greetcomp.instance.sendMessageEvent.subscribe(data => {
          console.log(data);
        })
      }

    )

  }

}
