import React from 'react';

import { useContext } from 'react';
import { TaxContext } from './components/taxContext';
import { useHistory } from 'react-router-dom';

import Calculation from './utils/Calculation';

import { Container } from './components/styles/Container.styled';
import { StyledCard } from './components/styles/Card.styled';
import { StyledResults } from './components/styles/Results.styled';
import { StyledFormDisabled } from './components/styles/FormDisabled.styled';
import { StyledLabel } from './components/styles/Label.styled';
import { StyledTitleTwo } from './components/styles/TitleTwo.styled';
import { StyledSelect } from './components/styles/Select.styled';
import { StyledInput } from './components/styles/Input.styled';
import { StyledInputR } from './components/styles/InputR.styled';
import { StyledDollor } from './components/styles/Dollor.styled';
import { StyledZero } from './components/styles/Zero.styled';
import { StyledCardBgMove } from './components/styles/CardBgMove.styled';
import { CircleMoon } from './components/styles/CircleMoon.styled';
import { CirclePlanetoid } from './components/styles/CirclePlanetoid.styled';
import { StyledOutput } from './components/styles/Output.styled';
import { StyledBackLink } from './components/styles/BackLink.styled';

const Results = () => {
  let history = useHistory();
  const { value, value2, value3 } = useContext(TaxContext);
  const income = value[0];
  const country = value2[0];
  const { year } = value3[0];
  console.log(country);

  let incomeNum;
  if (income) {
    incomeNum = Number(income.replace(/[^0-9.-]+/g, ''));
    incomeNum = Math.ceil(incomeNum);
  }

  const taxResults = Calculation(incomeNum);
  const taxBracket = taxResults.taxRange;
  const taxableIncome = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'AUD',
  }).format(taxResults.taxAll);

  return (
    <Container>
      <StyledCard>
        <StyledFormDisabled>
          <StyledTitleTwo>Your tax results</StyledTitleTwo>
          <StyledLabel top="70px">
            select your country of residence*
          </StyledLabel>
          <StyledSelect top="92px" bg="#E4E4E4" readOnly>
            <option value="0">Australia</option>
          </StyledSelect>
          <StyledLabel top="148px">Select an income year*</StyledLabel>
          <StyledSelect top="170px" bg="#E4E4E4" readOnly>
            <option value="0">2020 - 2021</option>
          </StyledSelect>
          <StyledLabel top="226px">
            Enter your total taxable income for the income year*
          </StyledLabel>
          <StyledDollor top="259px" />
          <StyledInput
            top="248px"
            bg="#E4E4E4"
            type="text"
            readOnly
            value={income || 0}
          />
          <StyledZero top="259px" />
          <StyledBackLink
            onClick={() => {
              history.push('/');
            }}
          >
            Go back to previous screen
          </StyledBackLink>
        </StyledFormDisabled>
        <StyledCardBgMove>
          <CircleMoon />
          <CirclePlanetoid />
        </StyledCardBgMove>

        <StyledResults>
          <StyledLabel fs="14px" top="0px" color="#FFFFFF">
            Your estimated taxable income is:
          </StyledLabel>
          <StyledInputR type="text" readOnly value={'$' + taxableIncome} />
          <StyledLabel fs="14px" top="111px" color="#FFFFFF">
            Breakdown
          </StyledLabel>
          <StyledLabel top="146px" z="1">
            Tax Bracket
            <br /> $0-$18,200
          </StyledLabel>
          <StyledOutput
            top="132px"
            type="text"
            readOnly
            value={
              taxBracket[0]
                ? new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'AUD',
                  }).format(taxBracket[0])
                : '$' + 0
            }
          />
          <StyledLabel top="200px" z="1">
            Tax Bracket
            <br />
            $18,201-$45,000
          </StyledLabel>
          <StyledOutput
            top="188px"
            type="text"
            readOnly
            value={
              taxBracket[1]
                ? new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'AUD',
                  }).format(taxBracket[1])
                : '$' + 0
            }
          />
          <StyledLabel top="256px" z="1">
            Tax Bracket
            <br /> $45,001-$120,000
          </StyledLabel>
          <StyledOutput
            top="244px"
            type="text"
            readOnly
            value={
              taxBracket[2]
                ? new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'AUD',
                  }).format(taxBracket[2])
                : '$' + 0
            }
          />
          <StyledLabel top="310px" z="1">
            Tax Bracket
            <br /> $120,001-$180,000
          </StyledLabel>
          <StyledOutput
            top="300px"
            type="text"
            readOnly
            value={
              taxBracket[3]
                ? new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'AUD',
                  }).format(taxBracket[3])
                : '$' + 0
            }
          />
          <StyledLabel top="368px" z="1">
            Tax Bracket
            <br /> $180,000+
          </StyledLabel>
          <StyledOutput
            top="356px"
            type="text"
            readOnly
            value={
              taxBracket[4]
                ? new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'AUD',
                  }).format(taxBracket[4])
                : '$' + 0
            }
          />
        </StyledResults>
      </StyledCard>
    </Container>
  );
};

export default Results;
