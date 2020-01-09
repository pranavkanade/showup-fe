import React, { Component, FormEvent } from 'react';

import { Form, Icon, Input, Button, Select, DatePicker } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import Card from '../../../../components/elements/Card';
import { Moment } from 'moment';

import styles from './index.module.scss';
import {
  createLeadDto,
  createNewLead
} from '../../../../../requests/lead/lead.requests';

export const formName = 'hero-form';

const { RangePicker } = DatePicker;
const { Option } = Select;

class HeroForm extends Component<FormComponentProps> {
  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const values = this.props.form.validateFields(
      (
        err: object,
        values: { title: string; tags: string[]; city: string; when: Moment[] }
      ) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const { title, tags, city, when } = values;
          let startDate = null;
          let endDate = null;
          if (when.length === 2) {
            startDate = when[0].toDate() || null;
            endDate = when[1].toDate() || null;
          }
          const data: createLeadDto = {
            title,
            city,
            tags,
            startDate,
            endDate
          };
          const response = createNewLead(data);
        }
      }
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card>
        <div className={styles.body}>
          <div
            style={{
              marginBottom: '1rem'
            }}
          >
            <h2>Report Your Protest!</h2>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <b>Protest Title</b>
              {getFieldDecorator('title', {
                rules: [
                  { required: true, message: 'Give a title to your protest!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="sound" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Protest Against Imigration Ban!"
                  size="large"
                />
              )}
            </Form.Item>
            <Form.Item>
              <b>Select Tags</b>
              {getFieldDecorator('tags', {
                rules: [
                  {
                    required: true,
                    message: 'Please select all applicable tags',
                    type: 'array'
                  }
                ]
              })(
                <Select
                  mode="multiple"
                  placeholder="Climate Change"
                  size="large"
                >
                  <Option value="climate change">Climate Change</Option>
                  <Option value="women's rights">Women's Rights</Option>
                  <Option value="government policies">
                    Government Policies
                  </Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              <b>City Name</b>
              {getFieldDecorator('city', {
                rules: [
                  {
                    required: true,
                    message: 'Enter City name where the protest is being held!'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="New York"
                  size="large"
                />
              )}
            </Form.Item>
            <Form.Item>
              <b>When is the protest?</b>
              {getFieldDecorator('when', {
                rules: [
                  {
                    type: 'array',
                    required: true,
                    message: 'Please select Date and Time!'
                  }
                ]
              })(
                <RangePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  size="large"
                  style={{
                    width: '100%'
                  }}
                />
              )}
            </Form.Item>
            <div className={styles.centered}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  margin: '1rem auto'
                }}
              >
                Report
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    );
  }
}

// import { Form, Icon, Input, Button, Checkbox } from 'antd';

const WrappedHeroForm = Form.create({ name: formName })(HeroForm);

export default WrappedHeroForm;
