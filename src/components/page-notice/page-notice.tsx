import { Component, Fragment, h } from '@rindo/core';

@Component({
  tag: 'page-notice',
  styleUrl: 'page-notice.css',
  // shadow: true,
})
export class PageNotice {

  names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dave',
    'Eve',
    'Frank',
  ]

  render() {
    return (
      <Fragment>
        <fml-header>
          <fml-toolbar color="primary">
            <fml-title>Notices</fml-title>
          </fml-toolbar>
        </fml-header>
        <fml-content class="fml-padding">
          <fml-list>
            {this.names.map(name=>
              <fml-item href={"/profile/"+name.toLowerCase()} key={name}>
                <fml-label>{name} is following you</fml-label>
              </fml-item>
            )}
          </fml-list>
        </fml-content>
      </Fragment>
    );
  }

}
