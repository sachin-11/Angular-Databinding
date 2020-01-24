import { Component, 
    OnInit, 
    Input, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy 
 , ViewChild,
 ElementRef,
 ContentChild} from "@angular/core";



@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})


export class ServerComponents implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, 
AfterViewChecked, OnDestroy {
 
   @Input('srvElement') element: {type: string, name: string, content: string}
   @Input() name: string;
   @ViewChild('heading', {static: true}) header: ElementRef
@ContentChild('ContentParagraph', {static: true}) content: ElementRef
    constructor() {
        console.log('constructor called')
    }

    ngOnChanges(changes: SimpleChanges){
       
        console.log('ngOnchanges called')
        console.log(changes)
    } 

    ngOnInit(){

        console.log('ngoninit called')
        console.log(this.header.nativeElement.textContent)
        console.log(this.content.nativeElement.textContent)

    }

    ngDoCheck(){
     console.log('ngDo checked called')
    }

    ngAfterContentInit(){
      console.log('ng after content called')
      console.log(this.content.nativeElement.textContent)
    }
  
    ngAfterViewInit(){
        console.log('ng after view Init called')
        console.log(this.header.nativeElement.textContent)
       }
   
       ngAfterViewChecked(){
         console.log('ng after view called')
       }

       ngOnDestroy(){
         
        console.log('on destroy first called')

       }
    

} 