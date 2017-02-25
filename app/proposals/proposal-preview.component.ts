import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: "proposal-preview",
  templateUrl: "proposal-preview.component.html",
})
export class ProposalPreviewComponent{
  proposal = new Proposal;
}