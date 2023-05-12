import { Component, h } from '@rindo/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {
  render() {
    return (
      <fml-app>
        <fml-router useHash={false}>
          <fml-route-redirect from="/" to="/tab/home"></fml-route-redirect>
          <fml-route url="/tab" component="app-tabs">
            <fml-route url="/home" component="tab-home">
              <fml-route component="page-home"></fml-route>
            </fml-route>
            <fml-route url="/notice" component="tab-notice">
              <fml-route component="page-notice"></fml-route>
            </fml-route>
          </fml-route>
          <fml-route url="/profile/:name" component="page-profile"></fml-route>
        </fml-router>
        <fml-nav></fml-nav>
      </fml-app>
    )
  }
}
