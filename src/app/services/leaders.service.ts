import { Injectable } from '@angular/core';

export interface ILeader {
  name: string;
  capital: number;
}

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  leaders: ILeader[] = [
    {name: 'Yuriy', capital: 293932568},
    {name: 'Elina', capital: 275568932},
    {name: 'Nataly', capital: 244525678},
    {name: 'Sasha', capital: 238745729},
    {name: 'Ivan', capital: 234986885},
    {name: 'Maria', capital: 226977524},
    {name: 'Roman', capital: 214900672},
    {name: 'Dariya', capital: 200898675},
    {name: 'Andrey', capital: 181656534},
    {name: 'Danka', capital: 139085278},
    {name: 'Rojer', capital: 128757543},
    {name: 'Oliver', capital: 126879523},
    {name: 'Emma', capital: 123234567},
    {name: 'Poll', capital: 121132446},
    {name: 'Luis', capital: 118354657},
    {name: 'Sofia', capital: 111089786},
    {name: 'Dana', capital: 110756444},
    {name: 'Sancho', capital: 108132468},
    {name: 'Ricardo', capital: 105099887},
    {name: 'Cris', capital: 101867512},
    {name: 'Leo', capital: 98098123},
    {name: 'Fred', capital: 96457156},
    {name: 'Riko', capital: 95731689},
    {name: 'Denis', capital: 94245132},
    {name: 'Simon', capital: 92068492},
    {name: 'Kris', capital: 90271854},
    {name: 'Sam', capital: 88108572},
    {name: 'Din', capital: 87758324},
    {name: 'Tony', capital: 86948274},
    {name: 'Emilia', capital: 84098761},
  ]

  constructor() { }
}
