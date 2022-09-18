//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { ReactiveObject, Transaction, transaction, isnonreactive } from 'reactronic'
import { Theme, DarkBlueTheme } from './Theme'

export class Themes extends ReactiveObject {
  @isnonreactive readonly all: Theme[]
  active: Theme

  constructor (...themes: Theme[]) {
    super()
    this.all = []
    themes.forEach(x => this.all.push(x))
    this.active = themes[0]
  }

  @transaction
  setActive(value: Theme): void {
    this.active = value
  }

  @transaction
  setActiveByName(name: string): void {
    const i = this.all.findIndex(t => t.name === name)
    if (i >= 0)
      this.active = this.all[i]
  }

  @transaction
  setNextActive(): void {
    const i = (this.all.indexOf(this.active) + 1) % this.all.length
    const theme = this.all[i]
    this.active = theme
  }
}

export const themes = Transaction.run(null, () => new Themes(new DarkBlueTheme()))
