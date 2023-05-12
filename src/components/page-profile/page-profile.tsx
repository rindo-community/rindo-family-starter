import { Component, Fragment, h, Prop } from '@rindo/core';

@Component({
  tag: 'page-profile',
  styleUrl: 'page-profile.css',
  // shadow: true,
})
export class PageProfile {
  @Prop() name: string

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  render() {
    return (
      <Fragment>
        <fml-header>
          <fml-toolbar color="primary">
            <fml-buttons slot="start">
              <fml-back-button defaultHref="/tab/notice"></fml-back-button>
            </fml-buttons>
            <fml-title>Profile: {this.name}</fml-title>
          </fml-toolbar>
        </fml-header>
        <fml-content fullscreen class="fml-padding">
          <fml-card>
            <fml-card-header>
              <h1>
                {this.normalize(this.name)}
              </h1>
            </fml-card-header>
            <fml-card-content>
              <p>
                This name is passed in through a route param!
              </p>
            </fml-card-content>
          </fml-card>
        </fml-content>
      </Fragment>
    );
  }

}
