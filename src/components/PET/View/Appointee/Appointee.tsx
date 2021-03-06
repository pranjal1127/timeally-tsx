import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../../../Layout/LayoutPET';

interface RouteParams {
  id: string;
}
type Props = {};
type State = {};

class Appointee extends Component<Props & RouteComponentProps<RouteParams>, State> {
  render = () => {
    return (
      <Layout
        breadcrumb={['Home', 'PET', 'View', this.props.match.params.id, 'Appointee']}
        title="Appointee"
      >
        This is Appointee page. Here user will see all the appointees. and can add new using add
        button.
      </Layout>
    );
  };
}

export default Appointee;
