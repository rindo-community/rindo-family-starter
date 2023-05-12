import { Component, h } from '@rindo/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
  // shadow: true,
})
export class AppTabs {

  render() {
    return (
      <fml-tabs>
        <fml-tab tab="tab-home">
          <fml-nav></fml-nav>
        </fml-tab>
        <fml-tab tab="tab-notice">
          <fml-nav></fml-nav>
        </fml-tab>
        <fml-tab-bar slot="bottom">
          <fml-tab-button tab="tab-home">
            <fml-icon name="home"></fml-icon>
            <fml-label>Home</fml-label>
          </fml-tab-button>
          <fml-tab-button tab="tab-notice">
            <fml-icon name="notifications"></fml-icon>
            <fml-badge color="danger">12</fml-badge>
            <fml-label>Notices</fml-label>
          </fml-tab-button>
        </fml-tab-bar>
      </fml-tabs>
    );
  }

}
