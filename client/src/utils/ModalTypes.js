import TextField, { TextArea } from '../components/TextField'
import Text from '../styles/StyledText';

const modalTypes = {
    'read': {
      actionType: (text) => text,
      title: (text) => <Text variant='body1' color='#121212' as='h6'>{text}</Text>,
      description: (text) => <Text variant='p' color='#121212' as='p'>{text}</Text>
    },
    'write': {
      actionType: (text) => text,
      title: (ref, placeholder) => <TextField 
        variant={'outlined'}
        reference={ref}
        type='text'
        placeholder={placeholder}
      />,
      description: (ref, placeholder) => <TextArea 
        variant={'outlined'}
        reference={ref}
        type='text'
        placeholder={placeholder}
      />
    }
  }

  export default modalTypes;