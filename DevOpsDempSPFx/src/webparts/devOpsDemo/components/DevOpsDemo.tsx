import * as React from 'react';
import styles from './DevOpsDemo.module.scss';
import { IDevOpsDemoProps } from './IDevOpsDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class DevOpsDemo extends React.Component<IDevOpsDemoProps, {}> {
  public render(): React.ReactElement<IDevOpsDemoProps> {
    return (
      <div className={ styles.devOpsDemo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>This is the 1st project which is deployed by Azure DevOps.</p>
              <p className={ styles.subTitle }>Testing 1st Commit.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
