import { Card, Tooltip,  Avatar} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const { Meta } = Card;

function CardItem() {
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title="Card title"
        description="This is the description"
      />
      <div className='avatarGroup'>
        <Avatar.Group
          maxCount={2}
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1677ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
      
    </Card>
  )
}

export default CardItem