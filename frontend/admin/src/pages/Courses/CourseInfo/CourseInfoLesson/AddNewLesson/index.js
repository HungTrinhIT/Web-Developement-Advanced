import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

const AddNewLesson = () => {
    let { id } = useParams();
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    return (
        <div>
            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'first']}
                                        fieldKey={[fieldKey, 'first']}
                                        rules={[{ required: true, message: 'Missing first name' }]}
                                    >
                                        <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'last']}
                                        fieldKey={[fieldKey, 'last']}
                                        rules={[{ required: true, message: 'Missing last name' }]}
                                    >
                                        <Input placeholder="Last Name" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add field
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default AddNewLesson;