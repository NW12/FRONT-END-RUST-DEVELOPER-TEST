use std::backtrace::Backtrace;

use anchor_lang::prelude::*;

declare_id!("Eo7CrZYq47669hDLtvyPXDHUqTb7xtgAgUz8sSMmYVFw");

#[program]
pub mod token {
    use super::*;

    pub fn initialize(ctx: Context<UserBalance>) -> Result<()> {
        //single user
        let fund: &mut Account<Fund> = &mut ctx.accounts.fund;
        fund.fund = 0;
        Ok(())
    }
    pub fn get_fund(ctx: Context<GetFund>) -> Result<()> {
        let fund = &ctx.accounts.fund;
        msg!("Fund: {}", fund.fund);
        Ok(())
    }
    pub fn add_fund(ctx: Context<AddFund>, amount: u64) -> Result<()> {
        let fund: &mut Account<Fund> = &mut ctx.accounts.fund;
        fund.fund += amount;
        Ok(())
    }
}
#[account]
pub struct Fund {
    pub fund: u64,
    pub owner: Pubkey,
}
#[derive(Accounts)]
pub struct GetFund<'info> {
    #[account(mut)]
    pub fund: Account<'info, Fund>,
}

#[derive(Accounts)]
pub struct AddFund<'info> {
    #[account(mut)]
    pub fund: Account<'info, Fund>,
    pub owner: Signer<'info>,
}

#[derive(Accounts)]
pub struct Initialize {}

#[derive(Accounts)]
pub struct UserBalance<'info> {
    #[account (init,payer=owner,space=9000)]
    pub fund: Account<'info, Fund>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}
