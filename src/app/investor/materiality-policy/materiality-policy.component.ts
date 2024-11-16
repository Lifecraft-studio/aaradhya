import { Component } from '@angular/core';

@Component({
  selector: 'app-materiality-policy',
  templateUrl: './materiality-policy.component.html',
  styleUrls: ['./materiality-policy.component.scss']
})
export class MaterialityPolicyComponent {

  cards=[
    { name: 'Material Policy', url: '/assets/investors/material_policy/material_policy.pdf' }
  ]

}
