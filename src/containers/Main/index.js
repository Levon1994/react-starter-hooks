import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';

import { fetchTeamMembers } from 'actions/teamMembers';

import { useMount } from 'utils';

import { useTranslator } from '../../utils/translator';

import './style.scss';

const mapStateToProps = ({ teamMembers, darkMode }) => ({ teamMembers, darkMode });

function Main({
  teamMembers,
  fetchTeamMembers,
  darkMode
}) {

  useMount(() => {
    fetchTeamMembers();
  });

  const { t } = useTranslator();

  return (
    <section className='Main'>
      {t('_Company_')}
    </section>
 );
};

export default connect(mapStateToProps, {
  fetchTeamMembers
})(withRouter(Main));
