import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Loop';

import QuestionFormManager from '../../containers/question-form-manager';

// TODO: find a way to use the theme's spacing
const PaddedPaper = withStyles({
  root: {
    padding: '1rem',
  },
})(Paper);

const QuestionListItem = ({
  updating,

  text,
  subject,
  theme,

  onUpdate,
  onDelete,
}) => (
  <PaddedPaper
    elevation={2}
    square
  >
    <Grid
      container
      direction="column"
      spacing={4}
    >
      <Grid
        item
        container
        spacing={1}
        direction="row"
        alignItems="center"
      >
        <Grid xs={10} item>
          <Typography variant="body1" color="textPrimary" gutterBottom paragraph>{text}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{`${subject} • ${theme}`}</Typography>
        </Grid>

        <Grid style={{ textAlign: 'right' }} xs={1} sm item>
          <IconButton onClick={onUpdate}>
            <UpdateIcon />
          </IconButton>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Divider />

      {updating !== null && (
        <Grid item>
          <QuestionFormManager
            questionId={updating}
          />
        </Grid>
      )}
    </Grid>
  </PaddedPaper>
);

QuestionListItem.propTypes = {
  updating: PropTypes.string,

  text: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,

  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

QuestionListItem.defaultProps = {
  updating: null,
};

export default QuestionListItem;
