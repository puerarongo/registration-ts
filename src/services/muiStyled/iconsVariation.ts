import { styled } from '@mui/material/styles';

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    borderColor: 'red',
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      width: '24px',
      height: '24px',
      color: '#fff',
      background: '#32ABF2',
      borderRadius: '50%',
      zIndex: 1,
      padding: '3px',
    },
    '& .QontoStepIcon-completedIconReturn': {
      width: '24px',
      height: '24px',
      color: '#fff',
      background: '#5D7FA3',
      borderRadius: '50%',
      zIndex: 1,
      padding: '3px',
    },
    '& .QontoStepIcon-circleActive': {
      width: '24px',
      height: '24px',
      border: '2px',
      borderStyle: 'solid',
      borderColor: '#32ABF2',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    '& .QontoStepIcon-circle': {
      width: '24px',
      height: '24px',
      border: '2px',
      borderStyle: 'solid',
      borderColor: '#5D7FA3',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  })
);

export default QontoStepIconRoot;
