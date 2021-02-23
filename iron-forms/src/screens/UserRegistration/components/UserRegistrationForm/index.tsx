import { Checkbox, createStyles, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, Theme } from '@material-ui/core'
import React from 'react'
import Alert from '@material-ui/lab/Alert';
import { ScreenToolbar } from '../../../../components/ScreenToolbar';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Controller, useForm } from 'react-hook-form';
import { Props, UserRegistrationFormData } from './types';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        width: '90%',
    },
    radioBtnField: {
        margin: theme.spacing(3, 0, 2),
    },
    checkBoxField: {
        margin: theme.spacing(3, 0, 2),
    },
    confirmBtn: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: '1rem',
        color: "white",
        backgroundColor: green[600],
        '&:hover': {
            backgroundColor: green[800],
        },

    },
    cancelBtn: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: '1rem',
        color: "white",
        backgroundColor: red[600],
        '&:hover': {
            backgroundColor: red[800],
        },

    },
  }),
);

export const UserRegistrationForm : React.FC<Props> = ( { countries }) => {
    const classes = useStyles();
    const { register, handleSubmit, errors, watch, getValues, control} = useForm<UserRegistrationFormData>({
        mode: "onChange"
    });

    const watchAllFields = watch();


    const onSubmit = (data: UserRegistrationFormData) => {
        console.log(data);
    };

    // (data: any) => ValidateResult | Promise<ValidateResult>;
    const isUserNameTaken = async(username: string) => {
        //true: not show message - validation OK
        //false: show message - validation failed
        await new Promise(r => setTimeout(r, 1000));

        const usernameAlreadyTaken : string[] = [ 'test', 'test1', 'test2' ];
        const isUsernameAvailable : boolean = usernameAlreadyTaken.indexOf(username) < 0;
        return  isUsernameAvailable || `username: ${ username } is already taken`;
        
    };

    const matchesEmailConfirmation = (emailConfirmation: string) => {
        const { email } = getValues();
        return email === emailConfirmation || 'Emails are not equal';
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container >
                <Grid item md={6} xs={12}>
                    <Grid container>
                        <Grid item md={12} xs={12}>
                            <ScreenToolbar
                                title="Welcome" 
                                subTitle="Subscribe! Become to an new Iron member ;)"
                                icon ={ <PeopleOutlineTwoToneIcon fontSize="large" /> }
                            />
                        </Grid>

                        <Grid item  md={6} xs={12}>
                            <TextField
                                className={classes.textField}
                                variant="standard"
                                label="Name"
                                name="name"
                                error= {Boolean(errors?.name)}
                                helperText={errors?.name?.message}
                                inputRef={register({ required: "Please enter your name.", 
                                                     minLength: { value: 5, message: "The first name must be longer than 5 characters."} })}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>

                            <TextField
                                className={classes.textField}
                                variant="standard"
                                label="Surname"
                                name="surname"
                                error= {Boolean(errors?.surname)}
                                helperText={errors?.surname?.message}
                                inputRef={register({ required: "Please enter your surname.", 
                                                     minLength: { value: 3, message: "The first name must be longer than 3 characters."},
                                                     maxLength: { value: 20, message: "The first name must be shorter than 20 characters."} })}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>

                            <TextField
                                className={classes.textField}
                                variant="standard"
                                label="Email"
                                name="email"
                                error= {Boolean(errors?.email)}
                                helperText={errors?.email?.message}
                                inputRef={register({ required: "Please enter your email.", 
                                                     pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                        message: "Enter a valid email address",
                                                     }})}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>

                            <TextField
                                className={classes.textField}
                                variant="standard"
                                label="Email confirmation"
                                name="emailConfirmation"
                                error= {Boolean(errors?.emailConfirmation)}
                                helperText={errors?.emailConfirmation?.message}
                                inputRef={register({ required: "Please enter your email confirmation.", 
                                                     pattern: {
                                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                                        message: "Enter a valid email address",
                                                     },
                                                     validate: matchesEmailConfirmation
                                                    })}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>

                            <TextField
                                className={classes.textField}
                                variant="standard"
                                label="Username"
                                name="username"
                                error= {Boolean(errors?.username)}
                                helperText={errors?.username?.message}
                                inputRef={register({ required: "Please enter your surname.", 
                                                     maxLength: { value: 50, message: "The username must be shorter than 50 characters."},
                                                     validate:  isUserNameTaken})}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>

                            <FormControl 
                                fullWidth  
                                className={classes.textField}
                                
                                error= {Boolean(errors?.countryId)}>
                                <InputLabel id="country-label-id">Country</InputLabel>
                                <Controller
                                    control={control}
                                    name="countryId"
                                    rules={{ required: "Please select a country." }}
                                    defaultValue=""
                                    as={
                                    <Select
                                        labelId="country-label-id">

                                        { countries.map((country) => (
                                                <MenuItem key={country.id} value={country.id}>
                                                        {country.name}
                                                 </MenuItem>
                                                ))
                                        }
                                      
                                    </Select>
                                    }
                                />

            
                                {Boolean(errors?.countryId) && (<FormHelperText>{errors?.countryId?.message}</FormHelperText>)}
                            </FormControl>
                        </Grid>

                        <Grid item md={6} xs={12}>

                        <FormControl 
                            className={classes.radioBtnField} 
                           >
                            <FormLabel>Genders</FormLabel>
                            <Controller
                                    control={control}
                                    name="genderId"
                                    rules={{ required: "Please select a gender." }}
                                    defaultValue="M"
                                    as={
                                        <RadioGroup 
                                            row >
                                            <FormControlLabel
                                                value="M"
                                                control={<Radio />}
                                                label="Male"
                                                labelPlacement="start"
                                            />
                                            <FormControlLabel
                                                value="F"
                                                control={<Radio />}
                                                label="Female"
                                                labelPlacement="start"
                                            />
                                    </RadioGroup>
                                    }
                                />
                        </FormControl>

                        </Grid>

                        <Grid item md={6} xs={12}>

                        <FormControlLabel
                            className={classes.checkBoxField} 
                            inputRef={register}
                            name="hasGitHub"
                            control={<Checkbox defaultChecked />}
                            label="Do you have a Github repository? "
                        />
                        </Grid>

                        <Grid item md={12} xs={12}>

                            <TextField
                                multiline
                                rows={4}
                                className={classes.textField}
                                variant="standard"
                                label="Comment"
                                name="comment"
                                error= {Boolean(errors?.comment)}
                                helperText={errors?.comment?.message}
                                inputRef={register({ maxLength: { value: 100, message: "The comment must be shorter than 100 characters."}})}
                            />
                        </Grid>

                        <Grid item md={12} xs={12} justify="space-between" container>

                            <Button
                                type='button'
                                className={classes.cancelBtn}
                                variant='contained'
                            >
                                Cancelar
                            </Button>

                            <Button
                                type='submit'
                                className={classes.confirmBtn}
                                variant='contained'
                            >
                                Confirmar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Alert severity="info" > 
                        <AlertTitle>Current Values</AlertTitle>
                        <pre>{JSON.stringify(watchAllFields, null, 2)}</pre>
                     </Alert> 
                </Grid>
            </Grid>
        </form>
    )
}
