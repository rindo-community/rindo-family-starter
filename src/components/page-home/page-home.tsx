import { Component, Fragment, h, State } from '@rindo/core'

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  // shadow: true,
})
export class PageHome {
  @State() mode: string

  constructor() {
    this.mode = localStorage.getItem('mode') || 'auto'
  }

  setMode(mode: string) {
    if (mode == this.mode) {
      return
    }
    this.mode = mode
    switch (mode) {
      case 'md':
      case 'ios':
        localStorage.setItem('mode', mode)
        break
      default:
        localStorage.removeItem('mode')
        break
    }
    location.reload()
  }

  render() {
    return (
      <Fragment>
        <fml-header>
          <fml-toolbar color="primary">
            <fml-title>Home</fml-title>
          </fml-toolbar>
        </fml-header>
        <fml-content class="fml-padding">
          <p>Welcome to Rindo App Starter.</p>
          <fml-list>
            <fml-radio-group
              value={this.mode}
              onIonChange={e => this.setMode(e.detail.value)}
            >
              <fml-list-header>
                <fml-label>Theme Mode</fml-label>
              </fml-list-header>
              <fml-note class="fml-padding-start">
                (Changing theme will reload the whole app.)
              </fml-note>
              <fml-item>
                <fml-radio value="auto">Auto Detect</fml-radio>
              </fml-item>
              <fml-item>
                <fml-radio value="md">Material Design</fml-radio>
              </fml-item>
              <fml-item>
                <fml-radio value="ios">iOS</fml-radio>
              </fml-item>
            </fml-radio-group>
          </fml-list>
          <p>Let's try navigating with family router!</p>
          <fml-list>
            <fml-item href="/tab/notice">
              <fml-label>Notice Page (/tab/notice)</fml-label>
            </fml-item>
            <fml-item href="/profile/family">
              <fml-label>Profile Page (/profile/family)</fml-label>
            </fml-item>
          </fml-list>
        </fml-content>
      </Fragment>
    )
  }
}
