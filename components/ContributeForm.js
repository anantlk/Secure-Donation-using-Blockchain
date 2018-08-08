import React from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";

class ContributeForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <Input label="ether" labelPosition="right" />
        </Form.Field>

        <Button primary>Contribute</Button>
      </Form>
    );
  }
}

export default ContributeForm;
