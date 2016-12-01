import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McqListComponent } from './mcqList.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [McqListComponent],
    exports: [McqListComponent]
})

export class McqListModule { 
    
    onMonthChange(event){
        debugger;
    }
    
    private getServiceInfo=function(){
   
    var params={
      "serviceId": $scope.selectedExam.serviceId
    }

    examService.getServiceInfo(params).then(function(result){
          $scope.selectedService=result.data;
          storageService.setSelectedService(result.data);
          },function (error) {
            alert('error subscribeToExam');
       });
   }
}
