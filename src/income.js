import React from 'react';

import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TaxContext } from './components/taxContext';
import NumberFormat from 'react-number-format';

import { Container } from './components/styles/Container.styled';
import { StyledCard } from './components/styles/Card.styled';
import { Button } from './components/styles/Button.styled';
import { StyledForm } from './components/styles/Form.styled';
import { StyledInput } from './components/styles/Input.styled';
import { StyledInputI } from './components/styles/InputI.styled';
import { StyledLabel } from './components/styles/Label.styled';
import { StyledSelect } from './components/styles/Select.styled';
import { StyledCardBg } from './components/styles/CardBg.style';
import { StyledTitle } from './components/styles/Title.styled';
import { StyledTitleTwo } from './components/styles/TitleTwo.styled';
import { StyledSubTitle } from './components/styles/SubTitle.styled';
import { CircleMoon } from './components/styles/CircleMoon.styled';
import { CirclePlanetoid } from './components/styles/CirclePlanetoid.styled';
import { StyledDollor } from './components/styles/Dollor.styled';
import { StyledZero } from './components/styles/Zero.styled';

const Income = () => {
  let history = useHistory();
  const { value, value2, value3 } = useContext(TaxContext);
  const [income, setIncome] = value;
  const [country, setCountry] = value2;
  const [year, setYear] = value3;

  const handleCal = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <StyledCard>
        <StyledCardBg>
          <StyledTitle>Tax-o-tron</StyledTitle>

          <StyledSubTitle>
            The free and simple online tax calculator.
          </StyledSubTitle>
          <CircleMoon />
          <CirclePlanetoid />
        </StyledCardBg>
        <StyledForm onSubmit={handleCal}>
          <StyledTitleTwo>Calculate your tax</StyledTitleTwo>
          <StyledInputI
            type="text"
            required
            readOnly
            value="&nbsp;&nbsp;&nbsp; !&nbsp;&nbsp;&nbsp; Fields marked with * are mandatory"
          />
          <StyledLabel top="125px">
            select your country of residence*
          </StyledLabel>
          <StyledSelect
            value="Australia"
            required
            onChange={(e) => setCountry(e.target.value)}
            top="147px"
          >
            <option value="Australia">Australia</option>
          </StyledSelect>
          <StyledLabel top="203px">Select an income year*</StyledLabel>
          <StyledSelect
            top="225px"
            value="2021"
            required
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2021">2020 - 2021</option>
          </StyledSelect>
          <StyledLabel top="281px">
            Enter your total taxable income for the income year*
          </StyledLabel>
          <StyledDollor />
          <NumberFormat
            thousandSeparator={true}
            customInput={StyledInput}
            hintText="Amount"
            isAllowed={(values) => {
              const { floatValue } = values;
              return floatValue >= 0;
            }}
            onChange={(e) => setIncome(e.target.value)}
          />

          <StyledZero />
          <Button
            onClick={() => {
              history.push('/results');
            }}
          >
            Calculate
          </Button>
        </StyledForm>
      </StyledCard>
    </Container>
  );
};

export default Income;
