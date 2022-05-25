import React, { useEffect, useState } from 'react'
import { DatePicker, Form, Input, Radio, Select, Switch, Image } from 'antd'
import { styled } from '@mui/material/styles'
import { Button, Box } from '@mui/material'
import DateTimePicker from '@mui/lab/DateTimePicker'

const AddPlant = () => {
  const [componentSize, setComponentSize] = useState('default')

  // select image //
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])
  // select image //

  //add Alert
  // const [alert, setAlert] = useState([])
  //alert

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }
  return (
    <>
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
        <input
          accept='image/*'
          type='file'
          id='select-image'
          style={{ display: 'none' }}
          onChange={e => setSelectedImage(e.target.files[0])}
        />
        <label htmlFor='select-image'>
          <Button variant='contained' color='primary' component='span'>
            Upload Image
          </Button>
        </label>
        {imageUrl && selectedImage && (
          <Box mt={2} textAlign='center'>
            <div>Image Preview:</div>
            <img src={imageUrl} alt={selectedImage.name} height='100px' />
          </Box>
        )}
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
    </>
  )
}

export default AddPlant
