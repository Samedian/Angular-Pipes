import { Pipe, PipeTransform } from "@angular/core";

// To build custom pipe
@Pipe({ 
    name : 'Ram'
})
export class ShorterPipe implements PipeTransform {
    transform(value: any, limit: number) {
        if(value.length < limit){
            return value;
        }
        return value.substr(0, limit) + "...";
    }
}