import { Injectable } from '@angular/core';

export class LoggerService {
  constructor() {}

  logData(data: any) {
    console.log(data);
  }
}
