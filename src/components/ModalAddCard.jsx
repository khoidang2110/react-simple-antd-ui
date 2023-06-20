/* eslint-disable react/prop-types */
import { Modal, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';

const { TextArea } = Input;

function ModalAddCard({ isOpenModalAddCard, handleCloseModalAddCard, handleAddTodo }) {
  const [form] = useForm();

  const onFinish = (values) => {
    form.resetFields();
    handleAddTodo(values);
    handleCloseModalAddCard();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal title="Add Card" open={isOpenModalAddCard} onOk={form.submit} onCancel={handleCloseModalAddCard}>
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input title!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input description!',
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalAddCard