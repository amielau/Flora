import React, { useEffect, useState } from 'react'
import { DatePicker, Form, Input, Radio, Select, Switch } from 'antd'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const AddPlant = () => {
  const [componentSize, setComponentSize] = useState('default')

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout='horizontal'
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label='Plant Name'>
        <Input />
      </Form.Item>
      <Form.Item label='NickName'>
        <Input />
      </Form.Item>
      <Form.Item label='Extra Care Instructions'>
        <Input />
      </Form.Item>
      <Form.Item label='Select'>
        <Select>
          <Select.Option value='demo'>Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label='DatePicker'>
        <DatePicker />
      </Form.Item>
      <Form.Item label='Daily Watering Reminder?' valuePropName='checked'>
        <Switch />
      </Form.Item>
      <Form.Item>
        <Button>Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default AddPlant
